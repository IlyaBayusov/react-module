type Props = { message: string };

export default function Message({ message }: Props) {
  return (
    <p className="mt-2 text-center font-medium text-red-500 text-sm">
      {message}
    </p>
  );
}
