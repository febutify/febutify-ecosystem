type Props = {
  title: string;
  description: string;
};

export default function ArchiveCard({
  title,
  description,
}: Props) {
  return (
    <article className="border rounded-xl p-6">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

    </article>
  );
}
