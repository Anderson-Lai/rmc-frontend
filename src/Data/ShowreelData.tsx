import type { ShowreelCardProps } from "../Components/ShowreelCard";
import andrew_showreel_1 from "../Showreel/andrew_showreel_1.jpg";
import ryan_showreel_1 from "../Showreel/ryan_showreel_1.mp4";
import isaac_showreel_1 from "../Showreel/isaac_showreel_1.png";
import isaac_showreel_2 from "../Showreel/isaac_showreel_2.png";
import isaac_showreel_3 from "../Showreel/isaac_showreel_3.png";
import isaac_showreel_4 from "../Showreel/isaac_showreel_4.png";
import remy_showreel_1 from "../Showreel/remy_showreel_1.mp4";

export const mediaOfTheMonth: ShowreelCardProps | null = 
// {
//     media: andrew_showreel_1,
//     author: "Andrew Ewing-Chow",
// }
null

export const showreelElements: ShowreelCardProps[] = [
    {
        media: remy_showreel_1,
        author: "Remy Lin"
    },
    {
        media: ryan_showreel_1,
        author: "Ryan Ye"
        // title: "RMC Introduction Video",
    },
    {
        media: andrew_showreel_1,
        author: "Andrew Ewing-Chow"
        // title: "Stephon Castle Graphic",
        // description: "This is just a graphic of an nba player and I was experimenting with patterns.",
    },
    {
        media: isaac_showreel_1,
        author: "Isaac Wong",
    },
    {
        media: isaac_showreel_2,
        author: "Isaac Wong",
    },
    {
        media: isaac_showreel_3,
        author: "Isaac Wong",
    },
    {
        media: isaac_showreel_4,
        author: "Isaac Wong",
    },
]