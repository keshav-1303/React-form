import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    country: "India",
    streetAddress: "", 
    city: "", 
    state: "", 
    postalCode: "",
    comments: false, 
    candidates: false, 
    offers: false, 
    pushNotifications: ""
  });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({
      ...prev, 
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Data:", formData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Main glassmorphism container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Contact Information
              </h1>
              <p className="text-blue-100/80 text-lg">Please fill out your details below</p>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={changeHandler}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white/90 mb-3">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={changeHandler}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                >
                  <option className="bg-gray-800 text-white">India</option>
                  <option className="bg-gray-800 text-white">United States</option>
                  <option className="bg-gray-800 text-white">Canada</option>
                  <option className="bg-gray-800 text-white">Mexico</option>
                </select>
              </div>

              {/* Address Section */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                    Address Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="streetAddress" className="block text-sm font-medium text-white/90 mb-3">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        placeholder="Enter your street address"
                        value={formData.streetAddress}
                        onChange={changeHandler}
                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-white/90 mb-3">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={changeHandler}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-white/90 mb-3">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={changeHandler}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                        />
                      </div>

                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-white/90 mb-3">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="Postal Code"
                          value={formData.postalCode}
                          onChange={changeHandler}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 hover:bg-white/25"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Notifications */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                    Email Notifications
                  </h3>
                  <p className="text-blue-100/70 mb-6">Choose which notifications you'd like to receive</p>
                  
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        checked={formData.comments}
                        onChange={changeHandler}
                        className="mt-1 h-5 w-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400/50 focus:ring-2"
                      />
                      <div className="flex-1">
                        <label htmlFor="comments" className="text-white font-medium cursor-pointer">
                          Comments
                        </label>
                        <p className="text-blue-100/70 text-sm mt-1">Get notified when someone posts a comment on a posting.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        checked={formData.candidates}
                        onChange={changeHandler}
                        className="mt-1 h-5 w-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400/50 focus:ring-2"
                      />
                      <div className="flex-1">
                        <label htmlFor="candidates" className="text-white font-medium cursor-pointer">
                          Candidates
                        </label>
                        <p className="text-blue-100/70 text-sm mt-1">Get notified when a candidate applies for a job.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        checked={formData.offers}
                        onChange={changeHandler}
                        className="mt-1 h-5 w-5 text-blue-400 bg-white/20 border-white/30 rounded focus:ring-blue-400/50 focus:ring-2"
                      />
                      <div className="flex-1">
                        <label htmlFor="offers" className="text-white font-medium cursor-pointer">
                          Offers
                        </label>
                        <p className="text-blue-100/70 text-sm mt-1">Get notified when a candidate accepts or rejects an offer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Push Notifications */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                    Push Notifications
                  </h3>
                  <p className="text-blue-100/70 mb-6">These are delivered via SMS to your mobile phone</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        type="radio"
                        id="pushEverything"
                        name="pushNotifications"
                        value="Everything"
                        checked={formData.pushNotifications === "Everything"}
                        onChange={changeHandler}
                        className="h-5 w-5 text-purple-400 bg-white/20 border-white/30 focus:ring-purple-400/50 focus:ring-2"
                      />
                      <label htmlFor="pushEverything" className="text-white font-medium cursor-pointer flex-1">
                        Everything
                      </label>
                    </div>

                    <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        type="radio"
                        id="pushEmail"
                        name="pushNotifications"
                        value="Same as email"
                        checked={formData.pushNotifications === "Same as email"}
                        onChange={changeHandler}
                        className="h-5 w-5 text-purple-400 bg-white/20 border-white/30 focus:ring-purple-400/50 focus:ring-2"
                      />
                      <label htmlFor="pushEmail" className="text-white font-medium cursor-pointer flex-1">
                        Same as email
                      </label>
                    </div>

                    <div className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <input
                        type="radio"
                        id="pushNothing"
                        name="pushNotifications"
                        value="No Push Notifications"
                        checked={formData.pushNotifications === "No Push Notifications"}
                        onChange={changeHandler}
                        className="h-5 w-5 text-purple-400 bg-white/20 border-white/30 focus:ring-purple-400/50 focus:ring-2"
                      />
                      <label htmlFor="pushNothing" className="text-white font-medium cursor-pointer flex-1">
                        No Push Notifications
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={submitHandler}
                  className="w-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-2xl border border-white/20 hover:from-blue-600/80 hover:to-purple-700/80 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-lg">Save Information</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;