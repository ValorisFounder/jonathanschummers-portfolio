import { Section } from "@/components/blueprint-shell";

export function Testimonials() {
  return (
    <Section invert className="!py-3xl max-md:!py-xl">
      <blockquote className="max-w-[800px]">
        <p className="font-body text-body leading-body italic">
          &ldquo;J&apos;ai eu le plaisir de travailler avec Jonathan dans le
          cadre de mes fonctions de Lead Design Ops chez TotalEnergies. En tant
          que Product Designer, tu as démontré ton autonomie sur plusieurs sujets
          d&apos;une grande complexité technique et stratégique en framing et en
          build et tu t&apos;es toujours très bien intégré au sein de tes
          squads. Tu es aussi capable de t&apos;adapter à différents contextes
          opérationnels. Tu es un collaborateur appliqué, impliqué et à
          l&apos;écoute des feedbacks. En tant que membre du Design Studio (20
          designers), tu as toujours été présent dans nos rituels d&apos;équipe
          et ton caractère jovial et les questions que tu posais participaient
          grandement à la dynamique d&apos;équipe. Tu as également pris très au
          sérieux ton rôle de mentor auprès de consultants plus juniors. Pour
          moi tu as toutes les qualités requises pour poursuivre une belle
          carrière ! Je te souhaite le meilleur pour la suite :)&rdquo;
        </p>
        <footer className="mt-lg">
          <p className="font-display text-h4 font-bold">
            Sandie Blanchaud
          </p>
          <p className="font-body text-body-sm text-invert-fg/60">
            Lead Design Ops @ TotalEnergies (The Digital Factory)
          </p>
        </footer>
      </blockquote>
    </Section>
  );
}
