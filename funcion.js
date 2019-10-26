module.exports.funcion=function anonymous(input
) {

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i];
    var output = {};
    
    for (var id in layer) {
      var node = layer[id];
      var sum = node.bias;
      
      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = (1 / (1 + Math.exp(-sum)));
    }
    input = output;
  }
  return output;
}