import requests

INDEXNOW_KEY = "82c8daecabf74a48aa725fe25c71fd5f"
KEY_LOCATION = "https://dreamsoft.bd/82c8daecabf74a48aa725fe25c71fd5f.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"

# 🔗 Your URLs
URLS = [
    "https://dreamsoft.bd/",
    
    # Software صفحات
    "https://dreamsoft.bd/software/pos-software-bangladesh/",
    "https://dreamsoft.bd/software/erp-software-bangladesh/",
    "https://dreamsoft.bd/software/inventory-management-software-bangladesh/",
    "https://dreamsoft.bd/software/accounting-software-bangladesh/",
    "https://dreamsoft.bd/software/isp-billing-software-bangladesh/",
    "https://dreamsoft.bd/software/fashion-shop-software-bangladesh/",
    "https://dreamsoft.bd/software/restaurant-pos-software-bangladesh/",
    "https://dreamsoft.bd/software/supershop-pos-software-bangladesh/",
    "https://dreamsoft.bd/software/electronics-shop-pos-software-bangladesh/",
    "https://dreamsoft.bd/software/wholesale-shop-pos-software-bangladesh/",
    "https://dreamsoft.bd/software/hardware-shop-pos-software-bangladesh/",
    "https://dreamsoft.bd/software/hotel-management-software-bangladesh/",
    "https://dreamsoft.bd/software/tailor-shop-software-bangladesh/",

    # Services
    "https://dreamsoft.bd/services/website-development-bangladesh/",
    "https://dreamsoft.bd/services/software-development-bangladesh/",
    "https://dreamsoft.bd/services/mobile-app-development-bangladesh/",
    "https://dreamsoft.bd/services/ecommerce-development-bangladesh/",
    "https://dreamsoft.bd/services/landing-page-development-bangladesh/",

    # Company
    "https://dreamsoft.bd/about-us/",
    "https://dreamsoft.bd/contact-us/",

    # Blog
    "https://dreamsoft.bd/blog/",

    # SEO
    "https://dreamsoft.bd/sitemap.xml",
]

def submit_indexnow(urls):
    data = {
        "host": "dreamsoft.bd",
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }

    try:
        response = requests.post(ENDPOINT, json=data)

        print("Status Code:", response.status_code)

        if response.status_code == 200:
            print("✅ सफलता: URLs submitted successfully")
        else:
            print("❌ Error:", response.text)

    except Exception as e:
        print("❌ Exception:", str(e))


if __name__ == "__main__":
    submit_indexnow(URLS)