from tqdm import tqdm
import copy

SPECIAL = '00000000000000000010000100001100110'
CLASSIC = '11111111111111111111111111111111111'
NB_POSSIBILITY = 33554431;
#33 554 431
class team:
    def __init__(self, name, id, win, per_win, per_lose, mr_win, hth):
        self.name = name;
        self.id = id;
        self.win = win;
        self.per_win = per_win;
        self.per_lose = per_lose;
        self.mr_win = mr_win;
        self.hth = hth;

class equal_team:
    def __init__(self, id, win, mr_win):
        self.id = id;
        self.win = win;
        self.mr_win = mr_win;

class opponent:
    def __init__(self, id, win):
        self.id = id;
        self.win = win;

class match:
    def __init__(self, red, blue):
        self.red = red;
        self.blue = blue;

LIST_TEAMS = [];
LIST_INCOMING_MATCHES = [];

def init_teams():
    hth = [];
    hth.append(opponent('LDLC', 1));
    hth.append(opponent('GO', 1));
    hth.append(opponent('SLY', 1));
    hth.append(opponent('VITB', 0));
    hth.append(opponent('BDSA', 1));
    hth.append(opponent('AEG', 1));
    hth.append(opponent('KC', 1));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 1));
    LIST_TEAMS.append(team('GAMEWARD', 'GW', 8, 0, 0, 1, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('GO', 1));
    hth.append(opponent('SLY', 2));
    hth.append(opponent('VITB', 0));
    hth.append(opponent('BDSA', 1));
    hth.append(opponent('AEG', 2));
    hth.append(opponent('KC', 1));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 2));
    LIST_TEAMS.append(team('LDLC OL', 'LDLC', 10, 0, 0, 4, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('LDLC', 1));
    hth.append(opponent('SLY', 1));
    hth.append(opponent('VITB', 2));
    hth.append(opponent('BDSA', 0));
    hth.append(opponent('AEG', 1));
    hth.append(opponent('KC', 1));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 1));
    LIST_TEAMS.append(team('TEAM GO', 'GO', 8, 0, 0, 3, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 1));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 0));
    hth.append(opponent('VITB', 1));
    hth.append(opponent('BDSA', 2));
    hth.append(opponent('AEG', 1));
    hth.append(opponent('KC', 1));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 0));
    LIST_TEAMS.append(team('SOLARY', 'SLY', 7, 0, 0, 2, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 2));
    hth.append(opponent('LDLC', 1));
    hth.append(opponent('GO', 0));
    hth.append(opponent('SLY', 0));
    hth.append(opponent('BDSA', 1));
    hth.append(opponent('AEG', 1));
    hth.append(opponent('KC', 0));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 1));
    LIST_TEAMS.append(team('VITALITY BEE', 'VITB', 7, 0, 0, 1, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 1));
    hth.append(opponent('SLY', 0));
    hth.append(opponent('VITB', 1));
    hth.append(opponent('AEG', 1));
    hth.append(opponent('KC', 2));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 2));
    LIST_TEAMS.append(team('BDS ACADEMY', 'BDSA', 8, 0, 0, 3, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 1));
    hth.append(opponent('SLY', 0));
    hth.append(opponent('VITB', 0));
    hth.append(opponent('BDSA', 1));
    hth.append(opponent('KC', 1));
    hth.append(opponent('BKR', 2));
    hth.append(opponent('IZI', 1));
    LIST_TEAMS.append(team('AEGIS', 'AEG', 6, 0, 0, 2, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 1));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 0));
    hth.append(opponent('SLY', 0));
    hth.append(opponent('VITB', 1));
    hth.append(opponent('BDSA', 0));
    hth.append(opponent('AEG', 0));
    hth.append(opponent('BKR', 1));
    hth.append(opponent('IZI', 2));
    LIST_TEAMS.append(team('KARMINE CORP', 'KC', 5, 0, 0, 2, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 1));
    hth.append(opponent('SLY', 0));
    hth.append(opponent('VITB', 1));
    hth.append(opponent('BDSA', 0));
    hth.append(opponent('AEG', 0));
    hth.append(opponent('KC', 1));
    hth.append(opponent('IZI', 1));
    LIST_TEAMS.append(team('BK ROG', 'BKR', 4, 0, 0, 1, copy.deepcopy(hth)))
    hth = [];
    hth.append(opponent('GW', 0));
    hth.append(opponent('LDLC', 0));
    hth.append(opponent('GO', 0));
    hth.append(opponent('SLY', 2));
    hth.append(opponent('VITB', 0));
    hth.append(opponent('BDSA', 0));
    hth.append(opponent('AEG', 0));
    hth.append(opponent('KC', 0));
    hth.append(opponent('BKR', 0));
    LIST_TEAMS.append(team('IZIDREAM', 'IZI', 2, 0, 0, 2, copy.deepcopy(hth)))

def init_incoming_matches():
    LIST_INCOMING_MATCHES.append(match('BKR','AEG'))
    LIST_INCOMING_MATCHES.append(match('VITB','GW'))
    LIST_INCOMING_MATCHES.append(match('KC','BDSA'))
    LIST_INCOMING_MATCHES.append(match('GO','LDLC'))
    LIST_INCOMING_MATCHES.append(match('IZI','SLY'))
    LIST_INCOMING_MATCHES.append(match('GO','BKR'))
    LIST_INCOMING_MATCHES.append(match('KC','IZI'))
    LIST_INCOMING_MATCHES.append(match('VITB','BDSA'))
    LIST_INCOMING_MATCHES.append(match('LDLC','SLY'))
    LIST_INCOMING_MATCHES.append(match('AEG','GW'))
    LIST_INCOMING_MATCHES.append(match('BKR','LDLC'))
    LIST_INCOMING_MATCHES.append(match('BDSA','AEG'))
    LIST_INCOMING_MATCHES.append(match('GO','GW'))
    LIST_INCOMING_MATCHES.append(match('SLY','KC'))
    LIST_INCOMING_MATCHES.append(match('VITB','IZI'))
    LIST_INCOMING_MATCHES.append(match('LDLC','KC'))
    LIST_INCOMING_MATCHES.append(match('GW','BKR'))
    LIST_INCOMING_MATCHES.append(match('SLY','VITB'))
    LIST_INCOMING_MATCHES.append(match('BDSA','GO'))
    LIST_INCOMING_MATCHES.append(match('AEG','IZI'))
    LIST_INCOMING_MATCHES.append(match('GW','LDLC'))
    LIST_INCOMING_MATCHES.append(match('KC','VITB'))
    LIST_INCOMING_MATCHES.append(match('BKR','BDSA'))
    LIST_INCOMING_MATCHES.append(match('SLY','AEG'))
    LIST_INCOMING_MATCHES.append(match('GO','IZI'))
    LIST_INCOMING_MATCHES.append(match('VITB','LDLC'))
    LIST_INCOMING_MATCHES.append(match('BDSA','GW'))
    LIST_INCOMING_MATCHES.append(match('KC','AEG'))
    LIST_INCOMING_MATCHES.append(match('IZI','BKR'))
    LIST_INCOMING_MATCHES.append(match('SLY','GO'))
    LIST_INCOMING_MATCHES.append(match('LDLC','BDSA'))
    LIST_INCOMING_MATCHES.append(match('AEG','VITB'))
    LIST_INCOMING_MATCHES.append(match('IZI','GW'))
    LIST_INCOMING_MATCHES.append(match('KC','GO'))
    LIST_INCOMING_MATCHES.append(match('SLY','BKR'))

def get_winner_index(list, id):
    for i, j in enumerate(list) :
        if (j.id == id) :
            return (i)
        
def get_details_win(id, SIMULATE_LIST_TEAM, waiting_room):
    NB_WIN = 0;
    INDEX = get_winner_index(SIMULATE_LIST_TEAM, id);
    for opponent in waiting_room :
        if opponent != id :
            HTH_INDEX = get_winner_index(SIMULATE_LIST_TEAM[INDEX].hth, opponent);
            NB_WIN += SIMULATE_LIST_TEAM[INDEX].hth[HTH_INDEX].win
    return NB_WIN, SIMULATE_LIST_TEAM[INDEX].mr_win
           
def split_waiting_room(size, waiting_room, SIMULATE_LIST_TEAM):
    QUALIFIED = [];
    NON_QUALIFIED = [];
    
    places_restante = 6 - size;
    EQUAL_TEAM = [];
    for x in range(len(waiting_room)):
        id = waiting_room[x];
        win, mr_win = get_details_win(id, SIMULATE_LIST_TEAM, waiting_room);
        EQUAL_TEAM.append(equal_team(id, win, mr_win))
    EQUAL_TEAM.sort(key=lambda x:(x.win, x.mr_win), reverse=True)
    
    for x in range(len(EQUAL_TEAM)):
        if (len(QUALIFIED) < places_restante) :
            #if (EQUAL_TEAM[x].win > EQUAL_TEAM[x + 1].win) :
            #    QUALIFIED.append(EQUAL_TEAM[x].id)
            #elif (EQUAL_TEAM[x].mr_win > EQUAL_TEAM[x + 1].win) :
            #    QUALIFIED.append(EQUAL_TEAM[x].id)
            #else :
            #    #CAS SPECIAL SHOULD BE 0.5
                QUALIFIED.append(EQUAL_TEAM[x].id)
        else :
            NON_QUALIFIED.append(EQUAL_TEAM[x].id)
    return QUALIFIED, NON_QUALIFIED
    

def get_qualified(SIMULATE_LIST_TEAM) :
    SIMULATE_LIST_TEAM.sort(key=lambda x:x.win, reverse=True);
    QUALIFIED = []
    NON_QUALIFIED = []
    WAITING_ROOM = []
    
    for x in range(len(SIMULATE_LIST_TEAM)):
        if (len(QUALIFIED) < 6) :
            if (x + 1 >= len(SIMULATE_LIST_TEAM)):
                WAITING_ROOM.append(SIMULATE_LIST_TEAM[x].id)
                FIND_QUALIFIED, FIND_NON_QUALIFIED = split_waiting_room(len(QUALIFIED), WAITING_ROOM, SIMULATE_LIST_TEAM);
                QUALIFIED = QUALIFIED + FIND_QUALIFIED
                NON_QUALIFIED = NON_QUALIFIED + FIND_NON_QUALIFIED
                WAITING_ROOM = []
            else :
                if (SIMULATE_LIST_TEAM[x].win > SIMULATE_LIST_TEAM[x + 1].win) :
                    WAITING_ROOM.append(SIMULATE_LIST_TEAM[x].id);
                    if (len(QUALIFIED) + len(WAITING_ROOM) < 6):
                        QUALIFIED = QUALIFIED + WAITING_ROOM
                        WAITING_ROOM = []
                    else :
                        FIND_QUALIFIED, FIND_NON_QUALIFIED = split_waiting_room(len(QUALIFIED), WAITING_ROOM, SIMULATE_LIST_TEAM);
                        QUALIFIED = QUALIFIED + FIND_QUALIFIED
                        NON_QUALIFIED = NON_QUALIFIED + FIND_NON_QUALIFIED
                        WAITING_ROOM = []
                else :
                    WAITING_ROOM.append(SIMULATE_LIST_TEAM[x].id)    
        else :
            NON_QUALIFIED.append(SIMULATE_LIST_TEAM[x].id)
    for team_qualif in QUALIFIED :
        id = get_winner_index(LIST_TEAMS, team_qualif)
        LIST_TEAMS[id].per_win += 1;
    for team_non_qualif in NON_QUALIFIED :
        id = get_winner_index(LIST_TEAMS, team_non_qualif)
        LIST_TEAMS[id].per_lose += 1;

def simulate_matchs(code):
    SIMULATE_LIST_TEAMS = copy.deepcopy(LIST_TEAMS)
    for x in range(len(LIST_INCOMING_MATCHES)) :
        if (code[x] == '1') :
            WINNER = LIST_INCOMING_MATCHES[x].red;
            LOOSER = LIST_INCOMING_MATCHES[x].blue;
        else :
            WINNER = LIST_INCOMING_MATCHES[x].blue;
            LOOSER = LIST_INCOMING_MATCHES[x].red;
        ID = get_winner_index(SIMULATE_LIST_TEAMS, WINNER);
        SIMULATE_LIST_TEAMS[ID].win +=1
        SIMULATE_LIST_TEAMS[ID].mr_win += 1
        ID_HTH = get_winner_index(SIMULATE_LIST_TEAMS[ID].hth, LOOSER);
        SIMULATE_LIST_TEAMS[ID].hth[ID_HTH].win += 1;
    get_qualified(SIMULATE_LIST_TEAMS)

init_teams();
init_incoming_matches();  

simulate_matchs(SPECIAL);

for x in tqdm(range(NB_POSSIBILITY)):
    code = '{0:035b}'.format(x);
    #print(code)
    simulate_matchs(code);
    for TEAM in LIST_TEAMS :
        print (TEAM.name, TEAM.per_win, TEAM.per_lose, sep=' ');
        per = (TEAM.per_win)/(TEAM.per_win + TEAM.per_lose);
        print('{:.4%}'.format(per))
    
