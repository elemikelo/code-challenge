import React from 'react';
import './form.css';

const Form = () => (

  <form className="form">
    <div className="container">
      <h2>Create Article</h2>
      <div>
        <label >Title:</label><br />
        <input type="text" name="title" id="title" />
      </div>

      <div>
        <label >Author:</label><br />
        <input type="text" name="author" id="author" />
      </div>

      <div>
        <label >Excerpt:</label><br />
        <textarea className="textarea" name="excerpt" id="excerpt" />
      </div>

      <div>
        <label >Content:</label><br />
        <textarea className="textarea" name="content" id="content" />
      </div>

      <div>
        <label>
          Published:<br />
          <select >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </label>
      </div>

      <div>
        <label >Tags:</label><br />
        <input type="tags" name="tags" />
      </div>
      <div className="buttons-form">
        <button className="button-close" >Cerrar</button>
        <button className="button-send" type='submit'>Enviar</button>
      </div>
    </div>
  </form>

)

export default Form;
//onSubmit={onSendArticle}
// onClick={onCloseText}
