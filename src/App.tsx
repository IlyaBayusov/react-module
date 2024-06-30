import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import InputNumber from "./components/InputNumber/InputNumber";
import ShowMore from "./components/ShowMore/ShowMore";

function App() {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          veritatis veniam maxime quibusdam, quia dolore quasi voluptatibus.
          Error, inventore consequatur, pariatur vel quam quas voluptatum
          temporibus minima repellat praesentium nam. Illum cupiditate aliquam
          atque laboriosam veritatis totam fugiat hic ad animi doloremque
          tempore, cumque nobis eaque, temporibus architecto veniam accusantium,
          libero obcaecati corporis eveniet. Quibusdam ad debitis aspernatur
          repellendus illum? Voluptatem dolorem deserunt error maiores fugit,
          dolor laboriosam corporis hic atque, tempore omnis, quas veritatis
          nisi aspernatur officiis quis libero reiciendis eos fugiat? Placeat
          iste reiciendis ad quisquam ab culpa. Quo repudiandae nulla natus ipsa
          optio, reprehenderit nisi pariatur minus eligendi blanditiis dolores.
          Perferendis laboriosam rerum qui dolore architecto illum officiis
          dicta eveniet delectus iure esse voluptas, omnis exercitationem
          soluta! Neque dolor cum, sapiente numquam beatae aspernatur soluta,
          sequi ratione voluptas inventore vero. Deserunt at dignissimos
          consequuntur quia architecto nostrum, nisi ea in temporibus explicabo
          eaque voluptates quaerat quis voluptatibus.`;

  return (
    <>
      <div className="wrapper">
        <Form />
        {/* <ShowMore text={text} /> */}
        {/* <InputNumber /> */}
      </div>
    </>
  );
}

export default App;
