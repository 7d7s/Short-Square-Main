export default function CookiePolicyPage() {
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
                        Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-golden">Policy</span>
                    </h1>
                    <p className="text-white/40 font-light text-lg tracking-wide">
                        Effective Date: October 2025
                    </p>
                </div>

                <div className="space-y-12 text-white/70 font-light leading-relaxed tracking-wide prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-headings:font-medium max-w-none">

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small data files that are securely placed on your computer or mobile device when you visit our website. ShotSquare utilizes cookies and similar tracking technologies (like web beacons or pixels) to recognize you when you visit our website, understand your interactions with our portfolio, and continually craft a seamlessly personalized browsing experience.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">2. The Types of Cookies We Use</h2>
                        <p>
                            Our website deliberately uses three primary categories of cookies:
                        </p>
                        <ul className="list-disc pl-5 space-y-4 opacity-90 mt-4">
                            <li>
                                <strong>Essential (Strictly Necessary) Cookies:</strong> These cookies are required for the fundamental operation of the ShotSquare website. They enable core functionality such as navigating page structures, accessing secure booking portals, and managing your session state safely. The website cannot function optimally without them.
                            </li>
                            <li>
                                <strong>Performance & Analytics Cookies:</strong> We utilize specialized third-party analytics (e.g., Google Analytics) to understand how visitors interact with our portfolio. These cookies collect anonymous information regarding page views, traffic sources, and dwell times. This rigorous data allows us to optimize load times for high-resolution imagery and elevate our UI architecture.
                            </li>
                            <li>
                                <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make during your visit (such as filtering our Projects gallery or retaining your language preference). This provides a more enhanced, personalized engagement with our content across multiple sessions.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">3. How Long Do Cookies Last?</h2>
                        <p>
                            The lifespan of a cookie depends on its designated type:
                        </p>
                        <p>
                            <strong>Session Cookies</strong> are temporary and absolutely expire the moment you close your web browser.
                            <strong> Persistent Cookies</strong> remain firmly on your device until they reach their determined expiration date, or until you manually clear them from your browser parameters.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">4. Managing Your Cookie Preferences</h2>
                        <p>
                            You possess full autonomy over your cookie preferences. The majority of modern web browsers automatically accept cookies, but you can usually modify your browser settings strictly to decline cookies if you prefer.
                        </p>
                        <p>
                            Please note that disabling certain Essential or Functionality cookies may cause specific features of the ShotSquare platform (such as portfolio lazy-loading or contact form transmissions) to function improperly or limit your access to secure areas.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">5. Third-Party Connections</h2>
                        <p>
                            When viewing embedded media (such as integrated video players) or interacting with social media sharing tools on our website, those external third parties may concurrently set their own cookies on your device. We hold no direct control over the deployment or mechanics of these external cookies. We strongly advise consulting their respective privacy policies for detailed information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-medium tracking-tight">6. Updates & Inquiries</h2>
                        <p>
                            ShotSquare may occasionally update this Cookie Policy to align with sweeping changes in data regulations or internal technological advancements.
                        </p>
                        <p>
                            If you have any detailed inquiries regarding our deployment of cookies, please initiate contact with our data team at:
                        </p>
                        <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 inline-block mt-4">
                            <p className="text-white font-medium">Data Privacy Control</p>
                            <p className="text-golden mt-1">legal@shortsquare.com</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
