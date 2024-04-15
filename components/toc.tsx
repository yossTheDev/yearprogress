import cloud from "../resources/cloud.json"

export const Toc = () => {
  return (
    <div className="sticky top-0 flex size-full flex-col gap-2 bg-slate-300">
      <a
        href={"#Cloud"}
        className="font-bold hover:cursor-pointer hover:underline"
      >
        Cloud
      </a>
      {Object.entries(cloud).map((item, index) => (
        <>
          <a
            href={"#" + item[0].replace(" ", "-")}
            className="hover:cursor-pointer hover:underline"
          >
            {item[0]}
          </a>
        </>
      ))}
    </div>
  )
}
