fetch('https://jsonplaceholder.typicode.com/comments')
  .then(Apple => Apple.json())
  .then(Output =>Post(Output));

  const Post = (Output) => {
      const content = document.getElementById('items');
      for (item of Output){

          const col = document.createElement('div');
          col.classList.add('col');

          const Card = `<div class="card">
          <div class="card-body">
          
          <h1>${item.name}</h1>
          <h5>${item.email}</h5>
          <p>${item.body}</p>`
          
          col.innerHTML = Card;
          items.appendChild(col);

        }
    }