require 'rubygems'
require 'json'

excluded = ['work', 'support', 'rekry', 'Profile', 'ikea', 'development', 'liidit', 'luottamus', 'poimuri', 'reception', 'ruckus', 'lahjakortit', 'tapiola', 'Avaus,*', 'salesforce', 'aineisto', 'info', 'bouncet', 'fb@avaus.fi', 'ga@avaus.fi', 'admin', 'gapps', 'kayttoluotto', 'E-mail 2', 'severa', 'jokakoti']

options = []

File.open('names.csv').each do |line|

  not_excluded = !excluded.any? { |s| line.include?(s) }

  if not_excluded
    splits = line.split(/,/)
    email = splits[30]
    splits = email.gsub(/^(.*)@.*$/, '\1').split('.')
    first = splits[0]
    last = splits[1]
    options << { 
      :first => first,
      :last => last,
      :imgSrc => 'images/people/monkey_face.jpg'
    }
    
  end

end

data = [{
    'id' => 'names',
    'name' => 'Nimet',
    'enabled' => true,
    'options' => options
  },
  {
    'id' => 'competence',
    'name' => 'Kompetenssi',
    'enabled' => false,
    'options' => []
  }
]

File.open('names.json', 'w') { |file| file.write(JSON.pretty_generate(data)) }