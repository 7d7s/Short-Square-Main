export default function TermsOfServicePage() {
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
                        Terms <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">of Service</span>
                    </h1>
                    <p className="text-white/40 font-light text-lg tracking-wide">
                        Effective Date: October 2025
                    </p>
                </div>

                <div className="space-y-12 text-white/70 font-light leading-relaxed tracking-wide prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-headings:font-medium max-w-none">

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service ("Terms") govern your access to and use of ShotSquare's website and premium studio services. By accessing our platform, booking a photoshoot, or utilizing our services, you expressly agree to be bound by these Terms and our Privacy Policy.
                        </p>
                        <p>
                            If you do not agree to all the terms and conditions outlined in this agreement, then you may not access the website or use any services provided by ShotSquare.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">2. Booking, Retainers, & Cancellations</h2>
                        <p>
                            All bookings require a non-refundable retainer fee (typically 50% of the total project cost) to secure your date and time on our studio calendar. The remaining balance is strictly due prior to the delivery of final watermarked assets or within 14 days of the shoot, whichever occurs first.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 opacity-90">
                            <li><strong>Rescheduling:</strong> You may request to reschedule your session up to 48 hours before the shoot time without penalty. Rescheduling within 48 hours is subject to availability and a rescheduling fee.</li>
                            <li><strong>Cancellations:</strong> If you cancel your session, the retainer fee is forfeited. Early cancellations (7+ days out) may allow the retainer to be applied to a future booking at the studio's discretion.</li>
                            <li><strong>Late Arrivals:</strong> Time begins exactly at the scheduled booking time. Any time lost due to late arrival will not be compensated.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">3. Studio Conduct & Liability</h2>
                        <p>
                            Clients are expected to maintain professional conduct while on ShotSquare premises or location shoots. The Client assumes full financial liability for any negligent damage to studio equipment, props, or property caused by themselves, their guests, or pets during the session.
                        </p>
                        <p>
                            ShotSquare is not responsible for injuries or accidents sustained during shoots, nor are we liable for lost or damaged personal items on set.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">4. Copyright, Licensing & Usage</h2>
                        <p>
                            ShotSquare retains full copyright ownership of all produced images and video under the Copyright Act, unless a Full Buyout contract is explicitly negotiated and executed in writing.
                        </p>
                        <p>
                            Upon final payment, the Client is granted a wide, non-exclusive usage license to use the delivered imagery for personal, editorial, or commercial purposes as defined in their tailored project invoice. Clients are strictly prohibited from selling the RAW or unedited versions of images, or editing/applying amateur filters over final deliverables.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">5. Archiving & Deliverables</h2>
                        <p>
                            Final digital assets are delivered via secure cloud link within the timescale agreed upon in your invoice (typically 2-4 weeks). ShotSquare archives final deliverables for a period of exactly twelve (12) months. After this horizon, we cannot guarantee the retrieval of your raw or final assets. Clients are advised to securely back up delivered files immediately upon receipt.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">6. Modification of Terms</h2>
                        <p>
                            ShotSquare reserves the right to review and modify these Terms at any time. Any changes will be posted on this page with an updated "Effective Date". Your continued use of the website or studio services after any such modifications constitutes your acceptance of the revised Terms.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
