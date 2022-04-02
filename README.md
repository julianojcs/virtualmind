# Virtualmind Tests

[![Netlify Status](https://api.netlify.com/api/v1/badges/e92f3e37-621c-4adc-aee6-7d7b67634411/deploy-status)](https://app.netlify.com/sites/virtualmind/deploys){:target="_blank"}

## Exercises A.1 and A.2
* File: answer_a.js

### A.1) The following code suffers from a known condition called “Pyramid of Doom”: If we were to chain more server calls together, then the PlayerDetailsController.showTeammatesClick method would go too deep and become very unstable. This doesn’t allow for a good way to handle error, or application state, if we were to react to each call in particular.

  - Tip: Check what $.ajax returns and its supported methods/hooks

```
var PlayerService = {
  getPlayerTeamId: function(playerId, callback) {
    $.ajax({
      url: "/player/" + playerId + "/team",
      success: function(team) {
        callback(team.id)
      }
    });
  },
  getPlayers: function(teamId, callback) {
    $.ajax({
      url: "/team/" + teamId + "/player",
      success: callback
    });
  }
};

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: function() {
    PlayerService.getPlayerTeamId(this.playerId, function(teamId) {
      PlayerService.getPlayers(teamId, function(playerList) {
        // Render playerList
      });
    });
  }
};
```

Refactor the code to use promises. Some Acceptance Criteria on the new code:
  - Keep the object definitions the same as in the example.
  - Keep the function signatures and interfaces exactly as they are, except for getPlayerTeamId and getPlayers, which should not expect the callback parameter.
  - Do not use callback functions in any way
  - If showTeammatesClick is called, then the playerList must be rendered at some point, assuming that we have a stable communication with the server

### A.2) Extra points for doing A) with async/await

## Exercise B
* File: answer_b.js

  - Given the following array of elements:

```
newItems = [
  {
    network: 'facebook',
    text: 'post number 1',
  },
  {
    network: 'twitter',
    text: 'some twitter text',
  },
  {
    network: 'gplus',
    text: 'some gplus stuff',
  },
  {
    network: 'facebook',
    text: 'post number 2',
  },
]
```

Write a function with this signature: 
  (arrayOfItems, aNetwork) => newArray

```
function foo(arrayOfItems, aNetwork) {
	// Write code here
}
console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'))
```

example:
```
foo(newItems, 'facebook')
```

outputs:
```
finalsItems = [
  {
    displayName: 'Facebook'
    text: 'post number 1'
  },
  {
    displayName: 'Facebook',
    text: 'post number 2'
  },
]
```
```
foo(newItems, 'gplus')
```
outputs:
```
finalsItems = [
  {
    displayName: 'Google +',
    text: 'some gplus stuff'
  }
]
```

- You will need to define your own way to consistently transform `network` into `displayNames`



## Exercise C

### React Refactor Exercise 
* File: index.js

This is a react component that is technically functional, but would be very hard to maintain because of it's size.

It's easier to write tests for smaller components that pass data between them. Rewrite this component so that it could be rendered from somewhere else by using these lines.

```
const checkboxes = [0, 1, 2]
<Form>
	checkboxes.map(id =>
		<Checkbox key={id} id={id}/>
	)
</Form>
```

or (easier but less impresive)
```
<Form checkboxes={checkboxes} />
```

If you decide to do the second option you MUST STILL create and render a Checkbox Component inside the Form Component

```
class BigForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: [false, false, false],
		};
    this.checkboxOnCheck = this.checkboxOnCheck.bind(this);
	}

	checkboxOnCheck(id) {
  	return () => {
			const checked = this.state.checked.map((value, index) => {
        if(id === index) {
          return !value;
        }
        return value;
			});
			this.setState({ checked });
    };
	}

	render() {
		const checked = this.state.checked;
		return (
			<div className="form">
				<span>Checked boxes: {JSON.stringify(checked)}</span>
				<div className="checkbox-wrapper">
					<span>checkbox 0</span>
					<input value={checked[0]} onChange={this.checkboxOnCheck(0)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 1</span>
					<input value={checked[1]} onChange={this.checkboxOnCheck(1)} type="checkbox" />
				</div>
				<div className="checkbox-wrapper">
					<span>checkbox 2</span>
					<input value={checked[2]} onChange={this.checkboxOnCheck(2)} type="checkbox" />
				</div>
			</div>
		)
	}
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);
```

### Install
  - Run npm install

### Runing deployed on-line
  Open [https://virtualmind.netlify.app](https://virtualmind.netlify.app){:target="_blank"} to view it in your browser.

### Available Script
  In the project directory, you can run:

#### `npm start`
  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000){:target="_blank"} to view it in your browser.
