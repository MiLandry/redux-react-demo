import chai from 'chai'; 
import counter from '../../reducers/counter';


chai.should();

counter(1, {type: 'INCREMENT'}).should.equal(2);
counter(5, {type: 'INCREMENT'}).should.equal(6);
counter(1, {type: 'DECREMENT'}).should.equal(0);
counter(5, {type: 'DECREMENT'}).should.equal(4);

//test initialization
counter(undefined, {}).should.equal(0);

//handle unknown type
counter(4, {type: 'IPSUM_LOREM'}).should.equal(4);




// const dispatchSpy = sinon.spy();

// function setup() {
//   const muiTheme = getMuiTheme();
//   const config = { imageApiHostname: 'test.com' };

//   fetchMock.get('*', {});

//   return shallow(
//     <App dispatch={dispatchSpy} config={config} />, { childContextTypes: { muiTheme: React.PropTypes.object }, context: { muiTheme } });
// }

// describe('An App Component', () => {
//   const wrapper = setup();

//   it('does stuff', () => {
//     wrapper.should.be.an.object;
//   });
// });



// var should = require('chai').should() //actually call the function , foo = 'bar' , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
 // foo.should.be.a('string');
 //  foo.should.equal('bar'); 
 //  foo.should.have.lengthOf(3); 
 //  beverages.should.have.property('tea').with.lengthOf(3);
