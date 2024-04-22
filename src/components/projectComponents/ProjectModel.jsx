export default function ProjectModel({ closeModal, project }) {
  return (
    <div className="static">
      <section className="z-40 absolute left-[10%] w-[80%] h-[50%] bg-white border-2 border-black ">
        <button onClick={closeModal}>Close</button>
        {project && (
          <div>
            <p>ID: {project.id}</p>
            <p>{project.Limage}</p>
            <p>Text: {project.text}</p>
            <section></section>
          </div>
        )}
      </section>
    </div>
  );
}
