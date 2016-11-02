FROM phusion/passenger-ruby22:0.9.15

# Set correct environment variables.
ENV HOME /root
ENV APP_HOME /home/app/webapp

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# Install bower
RUN npm -g install bower@1.7.9

# Add files
ADD . /home/app/webapp/

# Change /home/app/webapp owner to user app
RUN sudo chown -R app:app /home/app/webapp/

# Clean up APT when done
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /var/tmp/*
