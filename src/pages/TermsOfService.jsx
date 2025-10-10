import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">شروط الخدمة</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>
                Welcome to **RePlate**. By using our platform, you agree to be bound by these Terms and Conditions.
                Our headquarters are located in **Lebanon**, and these terms are governed by Lebanese laws and regulations.
              </p>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>"RePlate"</strong>: The food waste reduction platform.</li>
                <li><strong>"Restaurant"</strong>: Any food establishment registered on the platform.</li>
                <li><strong>"User"</strong>: Any person using the platform to obtain food.</li>
                <li><strong>"Surplus Food"</strong>: Edible meals that would otherwise be wasted.</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-700">
                  <strong>Important Note:</strong> RePlate is an intermediary platform and is **not responsible** for the quality of food provided by Restaurants.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be **over 18** years old to use the platform.</li>
                <li>Responsibility for food quality lies with the **Restaurant**.</li>
                <li>Food must be inspected before consumption.</li>
                <li>Adherence to the agreed-upon **pickup times**.</li>
              </ul>
            </section>

            {/* Restaurant Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Ensuring the food is **fit for human consumption**.</li>
                <li>Appropriate **packaging** of the food.</li>
                <li>**Disclosing** food ingredients to Users.</li>
                <li>Adherence to **Lebanese food safety** regulations.</li>
              </ul>
            </section>

            {/* Payments & Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments & Refunds</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All transactions are in **Lebanese Lira (LBP)**.</li>
                <li>**No refunds** after the food has been collected/received.</li>
                <li>In case of unavailability, a **full refund** will be issued.</li>
                <li>The platform takes a **15% commission** on every sale.</li>
              </ul>
            </section>

            {/* Lebanese Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                This agreement is governed by the laws and regulations of **Lebanon**. Any disputes arising from these terms
                will be settled in the courts of **Beirut, Lebanon**.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-green-50 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Questions?</h3>
              <p className="text-gray-700">
                For inquiries regarding the Terms of Service, please contact us at:
                <br />
                <strong>Email:</strong> legal@replate-lb.com
                <br />
                <strong>Phone:</strong> +961 1 123 456
              </p>
            </section>

            <div className="text-center text-sm text-gray-500 mt-8">
              Last Updated: December 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;