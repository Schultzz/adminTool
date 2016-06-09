/**
 * Created by ms on 05-06-2016.
 */
angular.module('app')
    .controller('CalendarCtrl', function (moment, $log) {

        var vm = this;

        //These variables MUST be set as a minimum for the calendar to work
        vm.calendarView = 'month';
        vm.viewDate = new Date();
        vm.events = [
            {
                title: 'An event',
                type: 'warning',
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true
            }, {
                title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
                type: 'info',
                startsAt: moment().subtract(1, 'day').toDate(),
                endsAt: moment().add(5, 'days').toDate(),
                draggable: true,
                resizable: true
            }, {
                title: 'This is a really long event title that occurs on every year',
                type: 'important',
                startsAt: moment().startOf('day').add(7, 'hours').toDate(),
                endsAt: moment().startOf('day').add(19, 'hours').toDate(),
                recursOn: 'year',
                draggable: true,
                resizable: true
            }
        ];

        vm.isCellOpen = true;

        vm.eventClicked = function(event) {
            $log.log('Clicked', event);
        };

        vm.eventEdited = function(event) {
            $log.log('Edited', event);
        };

        vm.eventDeleted = function(event) {
            $log.log('Deleted', event);
        };

        vm.eventTimesChanged = function(event) {
            $log.log('Dropped or resized', event);
        };

        vm.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };

    });