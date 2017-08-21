$(document).ready(function () {

  var foodItems = [
    {'item': 'Royal with Cheese', 'price':8.99},
    {'item': 'Arugula Pie', 'price':11.99},
    {'item': 'Smoked Swine', 'price':14.99},
    {'item': 'Ice Cream Bisquit', 'price':7.99}
  ]

  var totalPrice = 0;
  var deliverTotal = 0;

  $('#menu').click(function() {
    var createIndex = event.target.id
    var addItem = foodItems[createIndex]['item']
    var addPrice = foodItems[createIndex]['price']
    totalPrice = parseFloat((totalPrice +=addPrice).toFixed(2))
    taxDeliver = parseFloat((totalPrice * .0845).toFixed(2))
    deliverTotal = (taxDeliver + totalPrice).toFixed(2)
    $('#tableCart').append(`<tr><td>${addItem}</td><td></td><td>${addPrice}</td></tr>`)
    $('#totalPrice').text('$' + totalPrice)
    $('#taxDeliver').text('$' + taxDeliver)
    $('#deliverTotal').text('$' + deliverTotal)
  })

  $('#mvbtn').click(function() {
    $('#modal1').modal()

      $("#leftCol").empty()
      $("#rightCol").empty()

      $('.cartTable').clone().appendTo('#leftCol')
      $('.customerInfo').clone().appendTo('#rightCol')
    })

    $('#secondModal').click(function() {
      $('#modal2').modal()

        $("#leftCol").empty()
        $("#rightCol").empty()

        $('.cartTable').clone().appendTo('#leftCol')
        $('.customerInfo').clone().appendTo('#rightCol')
      })
})
