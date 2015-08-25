# encoding: utf-8
# This file originally created at http://rove.io/d354ee327490a777d151fef02774ef24

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/ubuntu-15.04-snappy-core-stable"
  config.ssh.forward_agent = true

  config.vm.network :forwarded_port, guest: 3000, host: 3000

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks"]
    chef.add_recipe :apt
    chef.add_recipe 'mongodb::default'
    chef.add_recipe 'git'
    chef.add_recipe 'nodejs'
    chef.add_recipe 'nginx'
    chef.json = {
      :mongodb => {
        :dbpath  => "/var/lib/mongodb",
        :logpath => "/var/log/mongodb",
        :port    => "27017"
      },
      :git     => {
        :prefix => "/usr/local"
      },
      :nginx   => {
        :dir                => "/etc/nginx",
        :log_dir            => "/var/log/nginx",
        :binary             => "/usr/sbin/nginx",
        :user               => "www-data",
        :init_style         => "runit",
        :pid                => "/var/run/nginx.pid",
        :worker_connections => "1024"
      }
    }
  end
end
