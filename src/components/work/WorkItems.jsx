// import React from 'react'

// const WorkItems = ({item}) => {
//   return (
//     <div className="work__card" key={item.id}>
//         <img src={item.image} alt="" className='work__img'/>
//         <h3 className="work__title">{item.title}</h3>
//         <a href="https://github.com/Haroun-3000" target="_blank" className="work__button">
//             Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//         </a>
//     </div>
//   )
// }

// export default WorkItems
const WorkItems = ({ item, deploymentLink }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span className="qualification__subtitle">{item.description}</span>
      <a
        href={deploymentLink}
        target="_blank"
        className="work__button"
        rel="noreferrer"
      >
        Video/Images <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
