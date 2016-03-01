(function(){
    angular
        .module('StripeApp')
        .controller('StripeCtrl');
    
    function StripeCtrl(){
        consoel.log('Loaded');
        Stripe.setPublishableKey: 'pk_test_KJPy0SR0AQJ9NZGkbOarSqdL'; 
        
    }
})();