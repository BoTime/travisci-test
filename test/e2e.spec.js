/**
 * End-to-end test example for Tensorspace.js
 */

describe('Tensorspace e2e test:', () => {
  beforeAll(() => {
    document.body.innerHTML = __html__['test/testcase.html'];

    // init a test model
    container = document.getElementById("container");
    model = new TSP.models.Sequential(container);

    model.add( new TSP.layers.GreyscaleInput({
      shape: [ 28, 28 ]
    }));

    conv2dLayer = new TSP.layers.Conv2d( {
      shape: [ 28, 28, 3 ]
    });
    model.add( conv2dLayer );

    // add test function as callback for model init
    model.init();

  });

  it('DOM \"container\" should be created:', () => {
    // document.body.innerHTML = __html__['test/template.html'];
    // document.body.innerHTML = __html__['test/testcase.html'];
    let div = document.getElementById('container');
    expect(div).not.toBeNull();
  });

  it('DOM \"container\" should be typef <div>:', () => {
    let div = document.getElementById('container');
    expect(div.nodeName).toBe('DIV');
  });


  it('conv2d', () => {
    expect(conv2dLayer.layerType).toBe('Conv2d');
  });

});
