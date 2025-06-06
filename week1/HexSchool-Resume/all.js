function expItem(data) {
  const expBlock = document.querySelector(".exp-block");
  expBlock.innerHTML = data.map((item) => {
    return `          <div class="exp-logo">
            <img
              src=${item.img}
              alt=${item.imgName}
            />
          </div>
          <div>
            <h2>
              ${item.name}
              <span>${item.nameBlod}</span>
            </h2>
            <p>${item.date}</p>
            <ul>${item.list.map((listitem) => {
              if (listitem !== null && typeof listitem === "Object") {
                return `<li>
                Key projects:
                <ul>
                ${listitem.keyproject.map((kpItem) => {
                  return `<li>
                    <a href=${kpItem.link}
                      >${kpItem.name}</a
                    >
                    ${kpItem.content}
                  </li>`;
                })}
                </ul>
              </li>`;
              } else {
                return `<li>
                ${listitem}
              </li>`;
              }
            })}
              
              <li>
                Enhanced and sustained the 3D asset pipeline, improving workflow
                efficiency and cross-department collaboration.
              </li>
              <li>
                Served as a technical bridge between departments, solving
                pipeline issues and enabling smoother production cycles.
              </li>
              <li>
                Developed Houdini USD-based asset workflows to support
                scalability and cross-software compatibility.
              </li>
              <li>
                Evaluated and implemented the feasibility of integrating Unreal
                Engine into the VFX production pipeline.
              </li>
              <li>
                Key projects:
                <ul>
                  <li>
                    <a href="https://www.imdb.com/title/tt33095194/"
                      >The Sinking of the Lisbon Maru (2023)</a
                    >
                    – Oversaw troubleshooting and finalization for character,
                    set, and prop assets.
                  </li>
                  <li>
                    <a href="https://www.imdb.com/title/tt23118352/"
                      >Moscow Mission (2023)</a
                    >
                    – Specialized in car asset pipeline, ensuring visual and
                    technical consistency.
                  </li>
                </ul>
              </li>
            </ul>
          </div>`;
  });
}
