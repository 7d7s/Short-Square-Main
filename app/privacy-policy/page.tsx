export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#050505] min-h-screen pt-32 pb-24 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                            Legal Framework
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">Policy</span>
                    </h1>
                    <p className="text-white/40 font-light text-lg tracking-wide">
                        Last Updated: October 2025
                    </p>
                </div>

                <div className="space-y-12 text-white/70 font-light leading-relaxed tracking-wide prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-headings:font-medium max-w-none">

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">1. Information We Collect</h2>
                        <p>
                            At ShotSquare, we believe in complete transparency regarding the data we collect. When you interact with our studio—whether by booking a session, subscribing to our dispatch, or communicating with our team—we may collect personal information including your name, email address, phone number, and any specific project details you provide.
                        </p>
                        <p>
                            We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and interaction metrics to help us optimize the digital experience.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">2. How We Utilize Your Data</h2>
                        <p>
                            The information we gather is exclusively used to deliver our premium photography services and enhance your experience with ShotSquare. Specifically, we use your data to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 opacity-90">
                            <li>Process and manage your bookings and secure transactions.</li>
                            <li>Communicate critical updates regarding your project timeline.</li>
                            <li>Deliver finalized digital assets securely to authorized recipients.</li>
                            <li>Improve our website architecture and service offerings.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">3. Data Security & Storage</h2>
                        <p>
                            As a studio dealing with highly confidential and unreleased visual assets, security is paramount. We implement enterprise-grade encryption and secure server architecture to protect your personal information and project files. Access to your data is strictly limited to authorized ShotSquare personnel who require it to fulfill their responsibilities.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">4. Third-Party Disclosures</h2>
                        <p>
                            ShotSquare never sells, trades, or maliciously transfers your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information strictly confidential under absolute NDA protocols.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">5. Media Usage & Copyright</h2>
                        <p>
                            Unless an exclusive buyout is contractually agreed upon, ShotSquare retains the copyright to all images captured. We reserve the right to respectfully use select images for our own portfolio, marketing, and promotional materials. If you require strict confidentiality (e.g., unreleased products, private events), a formal Non-Disclosure Agreement must be signed prior to the shoot.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">6. Contact Information</h2>
                        <p>
                            If you have any questions regarding this Privacy Policy or how your data is handled, please contact our privacy compliance team at:
                        </p>
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 inline-block mt-4">
                            <p className="text-white font-medium">ShotSquare Legal Team</p>
                            <p className="text-golden mt-1">legal@shortsquare.com</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
