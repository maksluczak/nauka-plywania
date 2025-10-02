from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Student, Class, Enrolment, Absence

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = { 'password': { 'write_only': True } }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'firstname', 'lastname', 'date_of_birth', 'user_obj']
        extra_kwargs = { 'user_obj' : { 'read_only': True } }

class ClassSerializier(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ['id', 'weekday', 'hour']


class EnrolmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrolment
        fields = ['id', 'class_obj', 'student_obj', 'active']
        extra_kwargs = { 'class_obj' : { 'read_only': True }, 'student_obj' : { 'read_only': True } }

class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        fields = ['id', 'class_obj', 'student_obj', 'absence_date']
        extra_kwargs = { 'class_obj' : { 'read_only': True }, 'student_obj' : { 'read_only': True } }