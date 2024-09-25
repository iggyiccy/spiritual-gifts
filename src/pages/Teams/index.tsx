import { Helmet } from "react-helmet-async";

export default function Teams() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 text-primary">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Teams</title>
      </Helmet>
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          營組 Camp Teams
        </h1>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Team 1
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Katrina
          <br />
          Jane
          <br />
          Winson
          <br />
          Felix
          <br />
          Victor
          <br />
          Carmen
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Team 2
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Mike
          <br />
          Thomas
          <br />
          Annie
          <br />
          Regina
          <br />
          Natalie
          <br />
          Gloria
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Team 3
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Matthew
          <br />
          Simon
          <br />
          Sing
          <br />
          Erin
          <br />
          Mirenda
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Team 4
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Dorothy
          <br />
          Kevin
          <br />
          Joey
          <br />
          Lam Yi
          <br />
          Dennis
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Team 5
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Katie
          <br />
          Samuel
          <br />
          Man man
          <br />
          Olivia
          <br />
          Owen
          <br />
          Joseph
        </p>
      </div>
    </main>
  );
}
