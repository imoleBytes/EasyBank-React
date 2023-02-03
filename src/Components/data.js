import Online from "../assets/icon-online.svg";
import Budgeting from "../assets/icon-budgeting.svg";
import Onboarding from "../assets/icon-onboarding.svg";
import Api from "../assets/icon-api.svg";

import Currency from "../assets/image-currency.jpg";
import Restaurant from "../assets/image-restaurant.jpg"
import Plane from "../assets/image-plane.jpg"
import Confetti from "../assets/image-confetti.jpg"


export const servicesData = [
    {
        icon: `${Online}`,
        title: "Online Banking",
        paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },

    {
        icon: `${Budgeting}`,
        title: "Simple Budgeting",
        paragraph: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },

    {
        icon: `${Onboarding}`,
        title: "Fast Onboarding",
        paragraph: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },

    {
        icon: `${Api}`,
        title: "Open API",
        paragraph: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }

]


export const articlesData = [
    {
        image: `${Currency}`,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        paragraph: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    {
        image: `${Restaurant}`,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        paragraph: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    {
        image: `${Plane}`,
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        paragraph: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    {
        image: `${Confetti}`,
        title: "Our invite-only Beta accounts are now live!",
        author: "Claire Robinson",
        paragraph: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }
]