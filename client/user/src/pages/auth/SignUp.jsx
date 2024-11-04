import { Link } from "react-router-dom";
import FormField from "../../components/common/FormField";
import useSignUpForm from "../../hooks/useSignUpForm";
import Button from "../../components/common/Button";
import { User, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignUpForm();

  const benefits = [
    "Access to premium turf facilities",
    "Priority booking windows",
    "Exclusive member rates",
    "24/7 premium support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Section - Benefits */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Join RiField Today
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start Your Premium
              </span>
              <br />
              <span className="text-base-content">
                Turf Experience
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Join the elite community of sports enthusiasts and enjoy premium benefits
            </p>
          </div>

          <div className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl">Premium Member Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-base-content/70">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
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

        {/* Right Section - Sign Up Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Create Account</h2>
                <p className="text-base-content/70 mt-2">
                  Join the premium turf booking platform
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    register={register}
                    error={errors.name}
                    icon={<User className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
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
                  <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    error={errors.confirmPassword}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="space-y-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-primary checkbox-sm" 
                      {...register('terms')}
                    />
                    <span className="text-sm text-base-content/70">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary-focus">
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary-focus">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full group"
                    loading={loading}
                  >
                    {loading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Already have an account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Sign in to your account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-base-content/70">
            Need help?{" "}
            <Link to="/contact" className="text-primary hover:text-primary-focus">
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;