"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLock, FiArrowRight, FiX, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.3,
      ease: [0.175, 0.885, 0.32, 1.1]
    } 
  },
};

const inputFocus = {
  focus: {
    boxShadow: "0 0 0 3px rgba(13, 148, 136, 0.15)",
    borderColor: "rgb(20, 184, 166)",
    transition: { duration: 0.2 }
  }
};

export function SignInForm({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({
    username: false,
    password: false
  });
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      router.push('/desktop');
      onClose();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Enhanced backdrop with subtle gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-br from-black/30 to-teal-900/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container with glass morphism effect */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={scaleIn}
        className="relative z-10 w-full max-w-md"
      >
        <motion.div
          variants={fadeIn}
          className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Floating decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-600/10 rounded-full filter blur-3xl"></div>
          
          {/* Modal header with gradient */}
          <div className="relative bg-gradient-to-r from-teal-50 to-teal-100 p-6">
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-800">
              Welcome Back
            </h2>
            <p className="text-center text-teal-700/80 mt-1">
              Sign in to your PharmaCity account
            </p>
            <button
              className="absolute top-4 right-4 text-teal-700/60 hover:text-teal-900 transition-colors duration-200"
              onClick={onClose}
              aria-label="Close"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Modal body */}
          <div className="p-6">
            <form className="space-y-6" onSubmit={handleSignIn}>
              {/* Username field with floating label effect */}
              <div className="relative">
                <motion.div
                  variants={inputFocus}
                  animate={isFocused.username ? "focus" : ""}
                  className="relative z-0"
                >
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-white/80 transition-all duration-200">
                    <FiUser className="text-gray-400 mr-3" size={18} />
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none text-gray-800 placeholder-transparent peer"
                      placeholder=" "
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setIsFocused({...isFocused, username: true})}
                      onBlur={() => setIsFocused({...isFocused, username: false})}
                      autoComplete="username"
                    />
                    <label className="absolute left-12 -top-2.5 bg-white px-1 text-xs text-teal-600 font-medium transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-12 peer-focus:-top-2.5 peer-focus:left-12 peer-focus:text-teal-600 peer-focus:text-xs">
                      Username
                    </label>
                  </div>
                </motion.div>
              </div>

              {/* Password field with floating label */}
              <div className="relative">
                <motion.div
                  variants={inputFocus}
                  animate={isFocused.password ? "focus" : ""}
                  className="relative z-0"
                >
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-white/80 transition-all duration-200">
                    <FiLock className="text-gray-400 mr-3" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-transparent outline-none text-gray-800 placeholder-transparent peer"
                      placeholder=" "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setIsFocused({...isFocused, password: true})}
                      onBlur={() => setIsFocused({...isFocused, password: false})}
                      autoComplete="current-password"
                    />
                    <label className="absolute left-12 -top-2.5 bg-white px-1 text-xs text-teal-600 font-medium transition-all duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-12 peer-focus:-top-2.5 peer-focus:left-12 peer-focus:text-teal-600 peer-focus:text-xs">
                      Password
                    </label>
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="ml-2 text-gray-400 hover:text-teal-600 transition-colors duration-200"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                </motion.div>
              </div>
              
              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded transition-colors duration-200"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-200">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-teal-600 hover:text-teal-700 hover:underline transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign in button with loading state */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl py-3 shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="mr-2"
                        >
                          <FiLoader className="w-5 h-5" />
                        </motion.span>
                        Signing In...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        Sign In
                        <motion.span
                          animate={{ x: 5 }}
                          transition={{ 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                          className="ml-2"
                        >
                          <FiArrowRight />
                        </motion.span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {/* Animated background for button */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </Button>
              </motion.div>
            </form>
            
            {/* Divider with subtle animation */}
            <div className="relative my-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200"></div>
              </motion.div>
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-400">
                  Don`t have an account?
                </span>
              </div> */}
            </div>
            
            
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}