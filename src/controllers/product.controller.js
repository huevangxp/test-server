import axios from 'axios';

export const getProductMCBuyer = async (req, res) => {
    try {
        const {lang } = req.query;
        const response = await axios.get(
            'https://www.mcbuyer.la/api/front/site-content/preferred-product-groups',
            {
                headers: {
                    'Accept': 'application/json',
                    'X-Tenant-Domain': 'www.mcbuyer.la',
                    'ENV_TENANT_ID': 'T24101022094707544',
                    'NEXT_LOCALE': 'th',
                    'ENV_TENANT': JSON.stringify({
                        id: "T24101022094707544",
                        name: "MC BUYER LA",
                        description: "Phakhao, Vientiane, Laos\n",
                        logoImage: "https://cdn.dajisaas.com/tenant/c2791d45d2ce4410993a230d07de127e.png",
                        defaultLanguage: 'th',
                        supportedLanguages: ["th", "en", "zh", "vi"],
                        country: "LA",
                        timezoneOffset: 7,
                        themeColor: "#ffbe2e",
                        tenantPreference: {
                            showPurchaseSteps: true,
                            showUserFeedback: false,
                            showExchangeRate: false,
                            copyProductUrlEnabled: true,
                            showCnyPrice: false,
                            showPurchaseAddress: true,
                            showStockin: false,
                            showTransit: false
                        },
                        socialLinks: [
                            { platform: "INSTAGRAM", link: "https://www.instagram.com/mychinabuyer/profilecard/?igsh=NHc1dDU2eHJpZnE0" },
                            { platform: "TELEGRAM", link: "https://maps.app.goo.gl/hrhKFFb6fGhQKkpA9" }
                        ],
                        footerLinks: [],
                        userWarehouseEnabled: true,
                        countryLanguageTag: "lo-LA"
                    }),
                    'DISPLAY_DIR': 'ltr',
                    'X-Tenant-Id': 'T24101022094707544',
                }
            }
        );

        return res.status(200).json({
            message: 'Success',
            data: response.data
        });

    } catch (error) {
        console.error(error.response?.data || error.message);
        return res.status(500).json({ message: 'Server Error' });
    }
};
