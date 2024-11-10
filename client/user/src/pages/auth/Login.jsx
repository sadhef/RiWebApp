import { Link, useNavigate } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useLoginForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Section - Welcome Text */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Welcome Back
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Login to RiField
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Access your premium turf booking account and continue your elite sports journey
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-base-content/70">Premium Turfs</div>
            </div>
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-base-content/70">Happy Players</div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-base-content/70 mt-2">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                    icon={<Mail className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    error={errors.password}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                    <span className="text-base-content/70">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:text-primary-focus transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full group"
                  loading={loading}
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Don't have an account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Create a free account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-base-content/70">
            By signing in, you agree to our
            <Link to="/terms" className="text-primary hover:text-primary-focus ml-1">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link to="/privacy" className="text-primary hover:text-primary-focus">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;