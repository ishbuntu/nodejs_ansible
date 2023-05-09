
Vagrant.configure("2") do |config|

  config.vm.box = "geerlingguy/centos7"

  config.ssh.insert_key = false

  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.provider :virtualbox do |v|
    v.memory = 256
    v.linked_clone = true
  end

  #Centos server 1
  config.vm.define "centos7" do |centos7|
    centos7.vm.hostname = "orc-centos7.test"
    centos7.vm.network :private_network, ip: "192.168.60.4"
  end

end
