/**
 * Created by TomButterworth on 1/24/16.
 */

/** Sample data for our model, this would be provided via an API or DB **/
var dataModel = {
    league: [
        {
            name: 'NFL',
            longName: 'National Football League',
            displayName: 'Pro Football',
            teams: [
                {
                    name: 'New England Patriots',
                    shortName: 'Patriots'
                },
                {
                    name: 'Carolina Panthers',
                    shortName: 'Panthers'
                },
                {
                    name: 'Denver Broncos',
                    shortName: 'Broncos'
                },
                {
                    name: 'Arizona Cardinals',
                    shortName: 'Cardinals'
                }
            ]
        },
        {
            name: 'MLB',
            longName: 'Major League Baseball',
            displayName: 'Pro Baseball',
            teams: [
                {
                    name: 'Kansas City Royals',
                    shortName: 'Royals'
                },
                {
                    name: 'San Diego Padres',
                    shortName: 'Padres'
                },
                {
                    name: 'Los Angeles Angels',
                    shortName: 'Angels'
                },
                {
                    name: 'Detroit Tigers',
                    shortName: 'Tigers'
                }
            ]
        },
        {
            name: 'NBA',
            longName: 'National Basketball Association',
            displayName: 'Pro Basketball',
            teams: [
                {
                    name: 'Cleveland Cavaliers',
                    shortName: 'Cavaliers'
                },
                {
                    name: 'Golden State Warriors',
                    shortName: 'Warriors'
                },
                {
                    name: 'San Antonio Spurs',
                    shortName: 'Spurs'
                },
                {
                    name: 'Los Angeles Clippers',
                    shortName: 'Clippers'
                }
            ]
        }
    ],
    match: []
};

// Our match 'class'
var Match = function() {

    // Keep track of 'this'
    var self = this;

    self.date = ko.observable();
    self.league = ko.observable({});
    self.awayTeam = ko.observable({});
    self.homeTeam = ko.observable({});

    // Generate list of teams that play in the selected league
    self.teamList = ko.computed(function() {
        return self.league().teams;
    });

    // Very basic error checking, makes sure a date is present and the two teams are not the same
    self.status = ko.computed(function() {
        if (self.date() && (self.homeTeam() != self.awayTeam())) {
            return true;
        }
    });
};

// View model keeps track of page observables
var viewModel = function() {

    var self = this;

    self.leagues = ko.observableArray([]);
    self.matchList = ko.observableArray([]);

    self.addMatch = function() {
        self.matchList.push(new Match);
    };

    dataModel.league.forEach(function(leagueItem) {
        self.leagues.push(leagueItem);
    });

};

ko.applyBindings(new viewModel());