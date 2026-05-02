const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img
        src={item.image}
        alt={item.title}
        className="work__img"
        loading="lazy"
        decoding="async"
      />
      <h3 className="work__title">{item.title}</h3>
      <span className="work__description">{item.description}</span>
    </div>
  );
};

export default WorkItems;
