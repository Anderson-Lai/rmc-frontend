import type { ShowreelCardProps } from "../Components/ShowreelCard";
import andrew_showreel_1 from "../Showreel/andrew_showreel_1.jpg"
import ryan_showreel_1 from "../Showreel/ryan_showreel_1.mp4"

export const mediaOfTheMonth: ShowreelCardProps | null = 
// {
//     media: andrew_showreel_1,
//     title: "Interpretive Line Dancing",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus aliquid blanditiis officiis quos, non voluptatem quis aperiam, accusamus optio voluptates deleniti commodi. Ducimus atque laboriosam modi. Eos, assumenda! Quae.",
//     author: "Some Really Creative Person",
//     alignMedia: "left"
// }
null

export const showreelElements: ShowreelCardProps[] = [
    {
        media: ryan_showreel_1,
        title: "RMC Introduction Video",
        author: "Ryan Ye",
        alignMedia: "left"
    },
    {
        media: andrew_showreel_1,
        title: "Stephon Castle Graphic",
        description: "This is just a graphic of an nba player and I was experimenting with patterns.",
        author: "Andrew Ewing-Chow",
        alignMedia: "left"
    }
]