require_relative('players')
require_relative('dictionary')

alphabet = ('a'..'z').to_a
class Game
  def initialize(*players)
    @fragment = ''
    @players = players
    @dictionary
  end

  def play
    p "Welcome! We're going to play Ghost!"
    play_round until game_over?
    p "#{previous_player} lost"
  end

  def play_round
    p "#{current_player}'s turn:  #{@fragment}"
    guess = current_player.guess
    
  end

  def current_player
    @players.first
  end

  def previous_player
    @players.last
  end

  def next_player!
    @players.rotate!
  end

  def take_turn(player)
    p @fragment

  end

  def valid_play?(string)

  end

  def game_over?
    @dictionary.includes?(@fragment)
  end

end

if __FILE__ == $PROGRAM_NAME
  game = Game.new(Player.new("Player One"), Player.new("Player Two"))
  game.play
end
