import css from './Alert.module.css';

export const Statistics = ({ title, stats }) => {
  let randomColor;
  randomColor = `#`;
  randomColor += Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className="statistics" style={{ backgroundColor: randomColor }}>
      <h2 className="title">{title.length < 0 ? undefined : title}</h2>
      <ul className={'stat-list'}>
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
