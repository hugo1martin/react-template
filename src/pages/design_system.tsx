import Layout from '../components/layout/layout';

function DesignSystem() {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>

      <div className='v-space-4'>
        <button className='button primary right-space-2'>Primary</button>
        <button className='button secondary right-space-2'>Secondary</button>
        <button className='button default right-space-2'>Default</button>
        <button className='button blank right-space-2'>Default</button>
      </div>

      <div className='v-space-4'>
        <div className='card primary bottom-space-2'>
          <h3>Card Primary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum, quibusdam,
            quia, quod voluptates voluptatem quos voluptatibus quae doloribus quas
            natus.
          </p>
        </div>

        <div className='card secondary bottom-space-2'>
          <h3>Card Primary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum, quibusdam,
            quia, quod voluptates voluptatem quos voluptatibus quae doloribus quas
            natus.
          </p>
        </div>

        <div className='card default bottom-space-2'>
          <h3>Card Primary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum, quibusdam,
            quia, quod voluptates voluptatem quos voluptatibus quae doloribus quas
            natus.
          </p>
        </div>

        <div className='card blank bottom-space-2'>
          <h3>Card Primary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum, quibusdam,
            quia, quod voluptates voluptatem quos voluptatibus quae doloribus quas
            natus.
          </p>
        </div>
      </div>

      <input></input>

      <div>
        <a>Clickable link</a>
      </div>

      <div>
        <a className='default'>Default clickable link</a>
      </div>
    </Layout>
  );
}

export default DesignSystem;
