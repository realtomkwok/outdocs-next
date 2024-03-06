import {Film, films} from "@/app/data/films";
import Image from "next/image";

function FilmStackItem(props: { film: Film }) {
    return (
        <section className="grid grid-cols-12 section-h-base">
            <div className="text-stone col-span-4 flex flex-col z-10 absolute self-end p-6 mix-blend-difference">
                <p className="symbol-l"></p>
                <h1 className="title-l">{props.film.title}</h1>
                <div className="flex flex-col gap-1 my-2">
                    <p className="caption-l">{props.film.award}</p>
                    <p className="caption-l">
                        {props.film.directors.map((director) => {
                            if (props.film.directors.length > 1) {
                                return `${director.name}, `
                            } else {
                                return `${director.name}`
                            }
                        })} | {props.film.country} | {props.film.year} | {props.film.duration} min
                    </p>
                </div>
            </div>
            <div className="col-start-4 col-end-13 relative">
                <Image src={props.film.heroImage.src} alt={props.film.heroImage.alt} fill objectFit="cover"/>
            </div>
        </section>
    )
}

export default function Home() {
    const film = films[0];

    return (
        <main>
            <FilmStackItem film={film}/>
            <section className="section-h-base">
            </section>
            <section className="section-h-xl">

            </section>
        </main>
    );
}
