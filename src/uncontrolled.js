import React from 'react';
import TreeView from './treeview';

const dataSource = [
  {
    type: 'Employees',
    people: [
      {name: 'Paul Godron', age: 25, sex: 'male', role: 'coder'},
      {name: 'Sarah Lee', age: 23, sex: 'female', role: 'jqueryer'},
    ],
  },
  {
    type: 'CEO',
    people: [
      {name: 'Drew Anderson', age: 35, sex: 'male', role: 'boss'},
    ],
  },
];

class Uncontrolled extends React.Component {
  render() {
    return (
      <div>
        <i>Uncontrolled</i>
        {dataSource.map((group) =>
          <TreeView key={group.type} tag={group.type}>
            {group.people.map((person, i) =>
              <TreeView key={i} tag={person.name}>
                <ul>
                  <li>{person.age}</li>
                  <li>{person.sex}</li>
                  <li>{person.role}</li>
                </ul>
              </TreeView>
            )}
          </TreeView>
        )}
      </div>
    );
  }
}

export default Uncontrolled;
