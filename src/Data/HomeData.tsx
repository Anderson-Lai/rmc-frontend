import purpose from '../Images/purpose.png';
import goals from '../Images/goals.png';
import announce from '../Images/announcements.png';
import type { CardProps } from '../Components/Card';

export const cardData : CardProps[] = [
    {
        title: "Our Purpose",
        image: purpose,
        body: "The Rams Media Club's purpose is to amplify student voices in the school community through their creative passions and talents.",
    },
    {
        title: "Our Plans",
        image: goals,
        body: "Our club focuses on building a community of creators in VFX, photography, and videography, competing in film competitions, and making videos for the school.",
    },
    {
        title: "Daily Announcements",
        image: announce,
        body: "Always Missing the Morning Announcements? Click here to stay up-to-date with our announcements for the latest updates!",
        link: "/announcements",
        noopen: true
    }
]

export const iosLink = "https://apps.apple.com/ca/app/st-robert-chs/id1568654037";
export const googleLink = "https://play.google.com/store/apps/details?id=com.sia.strobertcatholichighschool&hl=en_CA&source=sh/x/srp/wr/m1/3&kgs=a303003c103051a1&pli=1";
export const appDescription = "The St Robert CHS app enables parents, students, teachers and administrators to quickly access the resources, tools, news and information to stay connected and informed. Download the mobile app today!";