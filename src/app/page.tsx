import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://storage.googleapis.com/kelteno-file-api-public/images/catharsis.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    color: "Red",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://storage.googleapis.com/kelteno-file-api-public/images/hkrbs.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    color: "Red",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://storage.googleapis.com/kelteno-file-api-public/images/catharsis.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    color: "Red",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://storage.googleapis.com/kelteno-file-api-public/images/hrkbs.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    color: "Red",
  },
  // More products...
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Hackerbasa Shop
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Image
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                src={product.imageSrc}
                alt={product.imageAlt}
                width={500}
                height={600}
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
