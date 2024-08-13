import s from './Homepage.module.css'

const Homepage = ({clickHandler}) => {

  return (
    <div>
      <div>
        <h1>TribeBiotics Title</h1>
      </div>
      <div>
        <div className={s.hero}>
          <div className={s.imgWrapper}>
            <img className={s.img} src="/bio.jpg" alt='' />
          </div>
          <div className={s.btnWrapper}>
            <button onClick={clickHandler} className={s.btn}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage