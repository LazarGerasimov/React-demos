
function App() {
  return (
    <div className="App">
      {/* <!-- Navigation header --> */}
      <header class="navigation-header">
        <span class="navigation-logo">
          <img src="/static/images/todo-icon.png" alt="todo-logo" />
        </span>
        <span class="spacer"></span>
        <span class="navigation-description">Todo List</span>
      </header>

      {/* <!-- Main content --> */}
      <main class="main">

        {/* <!-- Section container --> */}
        <section class="todo-list-container">
          <h1>Todo List</h1>

          <div class="add-btn-container">
            <button class="btn">+ Add new Todo</button>
          </div>

          <div class="table-wrapper">

            {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
            <div class="loading-container">
              <div class="loading-spinner">
                <span class="loading-spinner-text">Loading</span>
              </div>
            </div>

            {/* <!-- Todo list table --> */}
            <table class="table">
              <thead>
                <tr>
                  <th class="table-header-task">Task</th>
                  <th class="table-header-status">Status</th>
                  <th class="table-header-action">Action</th>
                </tr>
              </thead>
              <tbody>

                {/* <!-- Todo item --> */}
                <tr class="todo is-completed">
                  <td>Give dog a bath</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo is-completed">
                  <td>Do laundry</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo">
                  <td>Vacuum floor</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo is-completed">
                  <td>Feed cat</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo">
                  <td>Change light bulbs</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo is-completed">
                  <td>Feed cat</td>
                  <td>Complete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo">
                  <td>Change light bulbs</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo is-completed">
                  <td>Go to Store</td>
                  <td>Completed</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr class="todo">
                  <td>Fill gas tank</td>
                  <td>Incomplete</td>
                  <td class="todo-action">
                    <button class="btn todo-btn">Change status</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer class="footer">
        <p>Copyright © designed by Mihail Valkov</p>
      </footer>
    </div>
  );
}

export default App;
