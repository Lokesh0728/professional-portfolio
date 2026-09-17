import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, Bot, User, Loader2, MessageSquare, Sparkles } from 'lucide-react';

// ─────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────
// Vite uses import.meta.env for environment variables.
// Fallback to http://localhost:5000 in development if not configured.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: "Hi! 👋 I'm Lokesh's AI assistant. Ask me anything about his projects, skills, experience, or how to contact him.",
};

// Suggested questions for visitors/recruiters
const SUGGESTED_PROMPTS = [
  "🚀 Tell me about your projects",
  "⚡ What are your technical skills?",
  "📬 How can I contact Lokesh?",
];

// ─────────────────────────────────────────────
// HELPER: Simple Markdown Formatter
// ─────────────────────────────────────────────
// Converts standard Markdown (**bold**, [links](url), bullet lists) into styled React elements
const FormattedMessage = ({ text }) => {
  // Process lines
  const lines = text.split('\n');

  return (
    <div className="space-y-1.5">
      {lines.map((line, lineIdx) => {
        // Skip purely empty lines with slight margin
        if (!line.trim()) {
          return <div key={lineIdx} className="h-1" />;
        }

        // Bullet points
        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
        const cleanLine = isBullet ? line.trim().substring(2) : line;

        // Parse inline markdown: links [title](url) and bold **text**
        const elements = [];
        // Regex matches both [label](url) and **bold**
        const tokenRegex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
        const tokens = cleanLine.split(tokenRegex);

        tokens.forEach((part, idx) => {
          if (!part) return;

          // Check for link: [Title](URL)
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            elements.push(
              <a
                key={idx}
                href={linkMatch[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold underline underline-offset-2 hover:text-red-400 transition-colors"
              >
                {linkMatch[1]}
              </a>
            );
            return;
          }

          // Check for bold: **text**
          const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
          if (boldMatch) {
            elements.push(
              <strong key={idx} className="font-bold text-white">
                {boldMatch[1]}
              </strong>
            );
            return;
          }

          // Normal text
          elements.push(<span key={idx}>{part}</span>);
        });

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 pl-1">
              <span className="text-red-500 font-bold">•</span>
              <span className="flex-1">{elements}</span>
            </div>
          );
        }

        return <div key={lineIdx}>{elements}</div>;
      })}
    </div>
  );
};

// ─────────────────────────────────────────────
// SUB-COMPONENT: A single message bubble
// ─────────────────────────────────────────────
const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar Icon */}
      <div
        className={`
          flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs
          ${isUser
            ? 'bg-gradient-to-br from-red-600 to-orange-500 text-white'
            : 'bg-white/10 border border-white/20 text-gray-300'
          }
        `}
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>

      {/* Bubble */}
      <div
        className={`
          max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isUser
            ? 'bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-br-none shadow-[0_0_15px_rgba(239,68,68,0.2)]'
            : 'bg-white/[0.06] border border-white/10 text-gray-200 rounded-bl-none'
          }
        `}
        style={{ wordBreak: 'break-word' }}
      >
        {isUser ? message.content : <FormattedMessage text={message.content} />}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// SUB-COMPONENT: Loading "thinking" indicator
// ─────────────────────────────────────────────
const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    className="flex items-end gap-2"
  >
    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
      <Bot size={14} className="text-gray-300" />
    </div>
    <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-orange-400"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
        />
      ))}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────
// MAIN COMPONENT: ChatWidget
// ─────────────────────────────────────────────
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll when messages update or loading starts
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus textarea when window opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // ── Send Message Logic ──
  const handleSend = async (overrideText) => {
    const textToSend = typeof overrideText === 'string' ? overrideText : inputValue;
    const trimmedInput = textToSend.trim();

    if (!trimmedInput || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: trimmedInput,
    };

    // 1. Optimistic Update: Render user message immediately
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    // 2. Prepare conversation history for backend context memory
    // Filter out welcome message and map only { role, content }
    const historyPayload = updatedMessages
      .filter((m) => m.id !== 'welcome')
      .slice(-6)
      .map((m) => ({ role: m.role, content: m.content }));

    try {
      // 3. Send HTTP POST request to Express backend
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedInput,
          history: historyPayload,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server responded with status: ${response.status}`);
      }

      if (data.success && data.reply) {
        const assistantMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.reply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error('Unexpected empty response format.');
      }
    } catch (err) {
      console.error('[ChatWidget Error]:', err);
      setError(
        err.message.includes('Failed to fetch')
          ? 'Cannot connect to backend server. Please verify the backend is running.'
          : err.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearConversation = () => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
  };

  const isInitialState = messages.length === 1 && messages[0].id === 'welcome';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="
              w-[90vw] sm:w-[400px]
              h-[560px] max-h-[80vh]
              flex flex-col
              bg-[#0a0a0a]
              border border-white/10
              rounded-3xl
              overflow-hidden
              shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_30px_rgba(239,68,68,0.08)]
            "
            role="dialog"
            aria-label="AI Chat assistant"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/20 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-600/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    <Bot size={18} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Lokesh's Assistant</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online · AI Verified
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearConversation}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <Trash2 size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Message List */}
            <div className="relative z-10 flex-1 overflow-y-auto px-4 py-5 space-y-4">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {/* Quick suggestion chips (only shown initially) */}
              {isInitialState && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-2 space-y-2"
                >
                  <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 pl-1">
                    <Sparkles size={13} className="text-orange-400" /> Suggested questions:
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="text-left text-xs bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/10 hover:border-red-500/40 rounded-xl px-3.5 py-2.5 transition-all"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && <TypingIndicator />}
              </AnimatePresence>

              {/* Error state */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-400 text-center px-4 py-2.5 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="relative z-10 border-t border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="flex items-end gap-3">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, experience..."
                  aria-label="Chat message input"
                  rows={1}
                  disabled={isLoading}
                  className="
                    flex-1 bg-white/5 border border-white/10
                    rounded-xl px-4 py-2.5
                    text-sm text-white placeholder:text-gray-500
                    focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30
                    resize-none
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                    max-h-[120px] overflow-y-auto
                  "
                  style={{ minHeight: '44px' }}
                />

                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                  className="
                    flex-shrink-0
                    w-10 h-10 rounded-full
                    bg-gradient-to-br from-red-600 to-orange-500
                    flex items-center justify-center
                    text-white
                    shadow-[0_0_15px_rgba(239,68,68,0.4)]
                    hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]
                    hover:scale-105
                    transition-all
                    disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
                  "
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} className="translate-x-px" />
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gray-500 mt-2 text-center">
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat' : "Open chat with Lokesh's AI assistant"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
          w-14 h-14
          rounded-full
          bg-gradient-to-br from-red-600 to-orange-500
          flex items-center justify-center
          text-white
          shadow-[0_0_25px_rgba(239,68,68,0.5)]
          hover:shadow-[0_0_40px_rgba(239,68,68,0.7)]
          transition-shadow
        "
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#0a0a0a]" />
          </span>
        )}
      </motion.button>

    </div>
  );
};

export default ChatWidget;
