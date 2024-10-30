import type { ShowreelCardProps } from "../Components/ShowreelCard";
import example from "../Videos/example.mp4"
import autreExample from "../Videos/health.mp4"

export const mediaOfTheMonth: ShowreelCardProps = {
    media: example,
    title: "Interpretive Line Dancing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus aliquid blanditiis officiis quos, non voluptatem quis aperiam, accusamus optio voluptates deleniti commodi. Ducimus atque laboriosam modi. Eos, assumenda! Quae.",
    author: "Some Really Creative Person",
    alignVideo: "left"
}

export const showreelElements: ShowreelCardProps[] = [
    {
        media: example,
        title: "Some Random Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus aliquid blanditiis officiis quos, non voluptatem quis aperiam, accusamus optio voluptates deleniti commodi. Ducimus atque laboriosam modi. Eos, assumenda! Quae.",
        author: "Anderson Lai",
        alignVideo: "left"
    },
    {
        media: autreExample,
        title: "Some Random Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus aliquid blanditiis officiis quos, non voluptatem quis aperiam, accusamus optio voluptates deleniti commodi. Ducimus atque laboriosam modi. Eos, assumenda! Quae.",
        author: "Anderson Lai",
        alignVideo: "right"
    }
]