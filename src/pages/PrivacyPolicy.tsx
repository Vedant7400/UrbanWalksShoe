
import React from "react";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose lg:prose-xl max-w-none">
          <p>Last Updated: June 15, 2025</p>

          <p>
            At UrbanWalks, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>

          <p>
            <strong>Personal Data:</strong> We may collect personal identification information, including but not limited to your name, email address, postal address, phone number, and payment information when you register on our site, place an order, subscribe to our newsletter, or fill out a form.
          </p>

          <p>
            <strong>Non-Personal Data:</strong> We may collect non-personal identification information about users whenever they interact with our site. This may include the browser name, the type of computer, technical information about users' means of connection to our site, and other similar information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>

          <p>We may use the information we collect from you to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process and fulfill your orders</li>
            <li>Send promotional emails and updates</li>
            <li>Improve our website and customer service</li>
            <li>Administer contests, promotions, surveys, or other site features</li>
            <li>Personalize your shopping experience</li>
            <li>Send periodic emails regarding your order or other products and services</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Protect Your Information</h2>

          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway provider's database.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>

          <p>
            We use cookies to enhance your experience on our site. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Third-Party Disclosure</h2>

          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>

          <p>
            UrbanWalks has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Your Acceptance of These Terms</h2>

          <p>
            By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contacting Us</h2>

          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
          </p>

          <p>
            UrbanWalks<br />
            Pillai College, Panvel<br />
            Navi Mumbai, Maharashtra<br />
            India<br />
            Email: privacy@urbanwalks.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
