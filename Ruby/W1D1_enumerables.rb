puts "hello"

class Array

  # enumerables

  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end
  end

  def my_select(&prc)
    new_arr = []
    self.my_each { |e| new_arr << e if prc.call(e) }
    new_arr
  end

  def my_reject(&prc)
    new_arr = []
    self.my_each { |e| new_arr << e unless prc.call(e) }
    new_arr
  end

  def my_any(&prc)
    self.my_each { |e| return true if prc.call(e) }
    false
  end

  def my_all(&prc)
    self.my_each { |e| return false unless prc.call(e)}
    true
  end

  # array

  # [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten => [1, 2, 3, 4, 5, 6, 7, 8]
  def my_flatten
    new_arr = []
    self.my_each { |e| e.is_a?(Array) ? new_arr += e.my_flatten : new_arr << e }
    new_arr
  end

  # [1, 2, 3].my_zip([4,5,6], [7,8,9]) => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  def my_zip(*args)
    # splat (*) lets you pass an array into a function expecting mulitple args
    new_arr = []
    self.length.times do |i|
      sub_arr = [self[i]]
      args.my_each { |e| sub_arr << e[i] }
      new_arr << sub_arr
    end
    new_arr
  end

  # a = [ "a", "b", "c", "d" ]
  # a.my_rotate => ["b", "c", "d", "a"]
  # a.my_rotate(2) => ["c", "d", "a", "b"]
  # a.my_rotate(-3) => ["b", "c", "d", "a"]
  # a.my_rotate(15) => ["d", "a", "b", "c"]
  def my_rotate(n = 1)
    n %= self.length
    self.drop(n) + self.take(n)
  end

  def my_join(separator = '')
    str = ''
    self.length.times { |i| i == 0 ? str << self[i] : str << separator + self[i]}
    str
  end

  def my_reverse
    n = self.length / 2
    n.times { |i| self[i], self[-(i + 1)] = self[-(i + 1)], self[i] }
    self
  end

end

def factors(num)
  result = []
  (2..(num / 2)).my_each { |n| result << n if num % n == 0 }
  result
end

class Array

  def bubble_sort(&prc)
    
  end

  def bubble_sort!(&prc)

  end

end

def substrings(string)
  subs = []
  (0...string.length).my_each do |i|
    (i...string.length).my_each do |j|
      subs << string[i..j]
    end
  end
  subs
end

def subwords(word, dictionary)
  subs = []
  dictionary.my_each { |w| subs << w if word.include?(w) }
  subs
end

array1 = [1, 2, 3, 4, 5]
array2 = %w(a b c d)
# puts array

# array.my_each { |n| puts n + 1 }

# puts array.my_select { |n| n.even? }

# puts array.my_reject { |n| n.even? }

# puts array.my_any { |n| n == 6 } # false
# puts array.my_any { |n| n == 3 } # true
# puts array.my_all { |n| n < 6 } # true
# puts array.my_all { |n| n.odd? } # false

# multi_dimensional_array = [1, 2, 3, [4, [5, 6]], [[[7]], 8]]
# p multi_dimensional_array.my_flatten

# p [1, 2, 3].my_zip([4,5,6], [7,8,9])

# p array.my_rotate
# p array.my_rotate(2)
# p array.my_rotate(-3)
# p array.my_rotate(15)

# p array.my_join
# p array.my_join('something')

# p array1.my_reverse
# p array2.my_reverse

# p factors(4)
#
# p substrings('string')
#
# p subwords('thisisalonglongwordrighthere', ['isis', 'ongle', 'right'])
